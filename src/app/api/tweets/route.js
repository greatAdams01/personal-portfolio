import { TwitterApi } from 'twitter-api-v2'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const BEARER_TOKEN = process.env.X_BEARER_TOKEN
    
    if (!BEARER_TOKEN) {
      return NextResponse.json(
        { error: 'X API token not configured' },
        { status: 500 }
      )
    }

    const client = new TwitterApi(BEARER_TOKEN)
    const readOnlyClient = client.readOnly

    // Get user by username
    const user = await readOnlyClient.v2.userByUsername('greatAdams01', {
      'user.fields': ['id', 'name', 'username'],
    })
    
    if (!user.data) {
      throw new Error('User not found')
    }

    // Get user timeline (recent posts) with media
    const tweets = await readOnlyClient.v2.userTimeline(user.data.id, {
      max_results: 5,
      exclude: ['replies', 'retweets'],
      'tweet.fields': ['created_at', 'public_metrics', 'text', 'attachments'],
      expansions: ['attachments.media_keys'],
      'media.fields': ['type', 'url', 'preview_image_url', 'alt_text', 'width', 'height'],
    })

    // Map media to tweets
    const mediaMap = {}
    if (tweets.data.includes?.media) {
      tweets.data.includes.media.forEach((media) => {
        mediaMap[media.media_key] = media
      })
    }

    // Attach media to tweets
    const tweetsWithMedia = (tweets.data.data || []).map((tweet) => {
      const media = []
      if (tweet.attachments?.media_keys) {
        tweet.attachments.media_keys.forEach((key) => {
          if (mediaMap[key]) {
            media.push(mediaMap[key])
          }
        })
      }
      return {
        ...tweet,
        media,
      }
    })

    return NextResponse.json({
      data: tweetsWithMedia,
      meta: tweets.data.meta || {},
    })
  } catch (error) {
    console.error('Error fetching X posts:', error)
    
    // Return empty data instead of error to prevent page crashes
    return NextResponse.json({
      data: [],
      error: error.message || 'Failed to fetch posts',
    })
  }
}

