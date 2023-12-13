import React from 'react'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'

interface Props {
	onStartGameClick : ( ) => void
}

export const MainNav = ({onStartGameClick} : Props) => {
	return (
		<>			
			<Navbar bg='dark' expand='md' data-bs-theme='dark' className='bg-body-tertiary' >
				<Container fluid>
					<Navbar.Brand>My Tic-Tac-Toe</Navbar.Brand>
					<Navbar.Toggle aria-controls='main-responsive-nav' />
					<Navbar.Offcanvas bg='dark' data-bs-theme='dark' id='main-responsive-nav' placement="end">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Options</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1'>
								<Nav.Link>Choose your players</Nav.Link>
								<Nav.Link onClick={onStartGameClick}>Start Game</Nav.Link>
							</Nav>
						</Offcanvas.Body>				
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	)
}
