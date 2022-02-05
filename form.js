function SubmitForm(){

  let nama = document.getElementById("nama").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  let subject = document.getElementById("subject").value
  let massage = document.getElementById("massage").value



  console.log(`nama: ${nama}`)
  console.log(`email: ${email}`)
  console.log(`phone: ${phone}`)
  console.log(`subject: ${subject}`)
  console.log(`massage: ${massage}`) 

  let emailReceiver = `diliyanaska@gmail.com`

  let a = document.createElement('a')
  a.href =`mailto:${emailReceiver}?subject=${subject}&body=Hallo my Name is ${nama}, My phone ${phone}`
  a.click()
}

// if(nama ==""){
//   alert("Isi Data sesuai Ketentuan")
// }
// if(email ==""){
//   alert("Isi Data sesuai Ketentuan")
// }
// if(pohone ==""){
//   alert("Isi Data sesuai Ketentuan")
// }
// if(subject ==""){
//   alert("Isi Data sesuai Ketentuan")
// }
// if(massage ==""){
//   alert("Isi Data sesuai Ketentuan")
// }
