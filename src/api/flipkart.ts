export const flipkartApi=async()=>{

let data=fetch('https://images.ctfassets.net')
data=await (await data).json()
return data
}