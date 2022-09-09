export default function html([first,...strings],...value) {
    console.log([first,...strings])
    console.log(strings)
    console.log(value)
    return value.reduce( 
        (acc,cur) => {acc.concat(cur,strings.shift())}
        ,[first]
    )
    .join('')

}