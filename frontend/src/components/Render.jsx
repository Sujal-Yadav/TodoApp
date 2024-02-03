import React, { memo, useMemo, useState } from "react";

export function Render() {
    const [text, setText] = useState("Sujal");

    function titleChange() {
        setText("" + Math.random());
    }
    return (
        <div>
            {/* <HeaderWithButton /> */}
            <button onClick={titleChange}>Click me to change the title</button>
            <Header title={text} />
            <Header title="Sumit" />
            <Header title="Sumit" />
            <Header title="Sumit" />
            <Header title="Sumit" />

        </div>
    )
}

// function HeaderWithButton(){
//     const [text, setText] = useState("Sujal");

//     function titleChange(){
//         setText("" + Math.random());
//     }
//     return (
//         <div>
//             <button onClick={titleChange}>Click me to change the title</button>
//             <Header title={text} />
//         </div>
//     )
// }

const Header = memo(function Header({title}) {
    return (
        <div>
            My name is {title}.
        </div>
    )
})