import React from 'react';

export const Layout = {
    Main: (props) => {
        return (
            <div>
                Main
                {props.children}
            </div>
        )
    },
    Header: (props) => {
        return (
            <header>
                <div>
                    Header
                </div>
            </header>
        )
    },
    Footer: (props) => {
        return (
            <footer>
                <div>Footer</div>
            </footer>
        )
    }
}