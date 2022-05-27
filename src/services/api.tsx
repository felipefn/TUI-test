import react from 'React'




const baseUrl = 'https://test.api.amadeus.com/v3'
const authUrl = '/security/oauth2/token'



const body = new URLSearchParams({
  client_id: '5JNWQ2meefL44GjweGaGUxzsuzVrhALm',
  client_secret: 'yWfARw82NeV2Ozj9',
  grant_type: 'client_credentials'
})

const start = async () => {
  const response = await fetch(
    `${baseUrl}${authUrl}`,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }),
      body,
    }
  )
  const data = await response.json()
  localStorage.setItem('token', data.access_token)
  console.log(localStorage.getItem("token"))
}

