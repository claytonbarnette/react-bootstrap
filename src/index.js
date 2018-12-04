import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
// import Container from './lib/Container'
// import Row from './lib/Row'
// import Col from './lib/Col'
import MediaObject from './lib/MediaObject';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const container = (
//     <Container layout="normal">
//         <p>Normal Container with content.</p>
//     </Container>
//     <Container layout="fluid">
//         <p>Fluid Container with content.</p>
//     </Container>
// )
// ReactDOM.render(container, document.getElementById('component'));

// const row = (
//     <Container layout="fluid">
//         <Row justify="start">
//             <div class="col-2">This is some content that is justified.</div>
//         </Row> 
//         <Row justify="center">
//             <div class="col-3">This is some content that is justified.</div>
//         </Row>
//         <Row justify="end">
//             <div class="col-2">This is some content that is justified.</div>
//         </Row>   
//         <Row justify="between">
//             <div class="col-3">This is some content that is justified.</div>
//         </Row>  
//         <Row justify="around">
//             <div class="col-2">This is some content that is justified.</div>
//         </Row>       
//     </Container>
// )
// ReactDOM.render(row, document.getElementById('component'));

// const col = (
//     <Container layout="fluid">
//         <Row >
//             <Col grid="6">This is content for normal cell.</Col>
//             <Col grid="6">This is content for normal cell.</Col>
//         </Row> 
//         <Row align="between" gutters="none">
//             <Col display="sm" grid="4">This is content for small cell.</Col>
//             <Col display="md" grid="4">This is content for med cell.</Col>
//             <Col display="lg" grid="4">This is content for large cell.</Col>
//         </Row>
//         <Row justify="start">
//             <Col display="sm" grid="3">This is content for small cell.</Col>
//         </Row>
//         <Row justify="center">
//             <Col display="sm" grid="3">This is content for small cell.</Col>
//         </Row>
//         <Row justify="end">
//             <Col display="sm" grid="3">This is content for small cell.</Col>
//         </Row>
//     </Container>
// )
// ReactDOM.render(col, document.getElementById('component'));

const media = (
    <MediaObject class="media" src={logo}>Media 1</MediaObject>
)
ReactDOM.render(media, document.getElementById('component'));
const media2 = (
    <MediaObject class="media" src={logo}>Media 2</MediaObject>
)
ReactDOM.render(media2, document.getElementById('com2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
