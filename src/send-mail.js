const { createApp } = Vue

createApp({
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      errorMsg: ''
    }
  },
  methods: {
    async sendMail  () {
      const errorText = 'Fill every filed'
      if (!this.name) return this.errorMsg = errorText
      if (!this.email) return this.errorMsg = errorText
      if (!this.validEmail(this.email)) return this.errorMsg = 'Add a valid email'
      if (!this.message) return this.errorMsg = errorText

      // console.log('Fired')
      let data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      const response = await fetch('https://formsubmit.co/ajax/kingifean@gmail.com', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      console.log(response)
      // return response.json();
      if (response.status === 200) return this.errorMsg = 'Message sent'
      if (response.status !== 200) return this.errorMsg = 'Something went wrong'
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}).mount('#app')