let fs = require('fs')

let handler = async (m, { conn, text }) => {
    conn.ia = conn.ia ? conn.ia : {}
    let id = m.chat
    if (!(id in conn.ia)) throw 'Tidak ada sesi!'
    let array = conn.ia[id][1]
    let sort = array.sort()
    let filename = `hasil-${Math.floor(Math.random() * 9999)}`
    let dir = `./tmp/${filename}.txt`
    await fs.writeFileSync(dir, `${sort}`)
    conn.sendFile(m.chat, dir, filename + '.txt')
}
handler.help = ['iasave']
handler.tags = ['tpd']
handler.command = /^(iasave)$/i

module.exports = handler