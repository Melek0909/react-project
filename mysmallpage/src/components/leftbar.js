import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function Items() {
    return (
    <ListGroup variant="flush" className='col-2'>
        <ListGroup.Item>Accueil</ListGroup.Item>
        <ListGroup.Item>Explorer</ListGroup.Item>
        <ListGroup.Item>Shorts</ListGroup.Item>
        <ListGroup.Item>Abonnements</ListGroup.Item>
        <ListGroup.Item>Bibliotheque</ListGroup.Item>
        <ListGroup.Item>Historique</ListGroup.Item>
        <ListGroup.Item>Vos videos</ListGroup.Item>
        <ListGroup.Item>A regarder plus tard</ListGroup.Item>
        <ListGroup.Item>Videos "j'aime"</ListGroup.Item>
    </ListGroup>
    );
}

export default Items;
