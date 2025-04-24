'use client';

import { useState } from 'react'

export default function LikeButton() {
    const [likes, setLikes] = useState(0); // 状態の保持が出来るようになる

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like (Like{likes})</button>
}
 