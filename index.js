function submitData(username, useremail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers:{
            'Content-Type': "application/json",
            'Accept': "application/json",
        },
        body: JSON.stringify({
            name: username,
            email:useremail,
        }),
    })
      .then(resp => resp.json())
      .then(json => {
          const elem = document.createElement('p')
          elem.textContent = json.id
          document.querySelector('body').appendChild(elem)
        })
        .catch(err => {
            const elem = document.createElement('p')
            elem.textContent = err
            document.querySelector('body').appendChild(elem)
        })
}