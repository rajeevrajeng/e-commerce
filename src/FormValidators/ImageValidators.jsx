import React from 'react'

export default function ImageValidators(e) {
  if (e.target.files.length === 0)
    return "Please Upload an Image"

  else if (e.target.files.length === 1) {
    let file = e.target.files[0]
    console.log(file)
    if (!(["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(file.type)))

      return `Invalid Pic Type, Please Upload a Pic of Type .jpeg, .jpg, .png, .gif, .webp`

    else if (file.size > 1048576)
      return "Pic is TOO Heavy, Please Upload an Imgae Upto 1 MB"
    else
      return ""
  }
  else {

  }


}
