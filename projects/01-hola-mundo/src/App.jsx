import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [

    {
        userName: 'midudev',
        name : 'Miguel Angel Duran',
        isFollowing : true
    },
    {
        userName: 'pheralb',
        name : 'Pablo H.',
        isFollowing : false
    },
    {
        userName: 'mariorota',
        name : 'Mario Roman',
        isFollowing : true
    },
    {
        userName: 'TMchein',
        name : 'Tomas',
        isFollowing : false
    },
]


export function App(){

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
        
    )
}