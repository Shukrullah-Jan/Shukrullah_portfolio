

// creating component by extending React.Component class
class App extends React.Component {
    render() {
        return (
            <div>Render using class</div>
        )
    }
}
export default App;


// const App = () => {

//     return (
//         <div className='wrapper'>Inside App

//             {/* this is how you can create an element using react without JSX */}
//             {React.createElement('p', { className: 'p1' }, "Hey",
//                 React.createElement('b', null, " B content"))}

//             {React.createElement('b', { className: 'p2' }, "Second Bold")}
//         </div>

//     )
// }
// export default App;


// the following method is not working

// const List = React.createClass({
//     render() {
//         return(<p>I am a paragraph</p>)
//     }
// })
// export default List;
