const http=require("http")
const host= "127.0.0.1"
const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end('Saudades do tempo de gloria que mevisitava no jardim Paulista')

})

server.listen(port,host,()=>{
    console.log(`Servidor rodando  no http://\\${host}
    :${port}`)
})