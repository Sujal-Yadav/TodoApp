export function Wrapper() {
    return (
        <div>
            <Wrap>
                <div className="bg-black text-white">
                    Hi there
                </div>

            </Wrap>

            <Wrap>
                <div>
                    Hello there
                </div>

            </Wrap>
        </div>
    )
}

function Wrap({ children }) {
    return <div className="border-2 border-black p-10">{children}</div>
}

function TextComponent() {
    return <div>Hi there</div>
}