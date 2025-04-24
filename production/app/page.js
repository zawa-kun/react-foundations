import { useState } from 'react'

function Header({title}) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
    const [likes, setLikes] = React.useState(0); // 状態の保持が出来るようになる

    // stateは初期化されたコンポーネント内で管理する.
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title='Develop. Preview. Ship.' />
            <ul>
                {names.map((name) => (
                    <li key={name}> {name} </li>
                ))}
            </ul>
            <button onClick={handleClick}>Like (Like{likes})</button>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
