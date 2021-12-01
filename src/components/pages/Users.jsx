import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";
import { GetAny } from "../../main";
import AddUserModal from "./AddUserModal";
import { Link } from "react-router-dom"
import { MdModeEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
import { Modal, Button } from "react-bootstrap"
const Users = ({ modalOpen, setModalopen }) => {
  const [usersData, setUsersData] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [adduser, setAdduser] = useState(false);
  const [reaload, setReaload] = useState(false)
  React.useEffect(() => {
    GetAny("users").then((response) => {
      // console.log(response.data)
      if (response.data.length !== 0) {
        const filterdata = response.data.filter((item) => item.deleted !== "1" && item.email !== "staff@staff.com" && item.id !== "1")
        setUsersData(filterdata)
      }
      setAdduser(false);
    });
  }, [adduser, reaload]);
  const deleteUser = (id) => {
    console.log(id)
    GetAny(`deleteUser?id=${id}`).then((response) => {
      // console.log(response)
      setReaload(true)
    });
  }
  if (usersData !== false) {
    const data = {
      columns: [
        {
          label: "Naam",
          field: "name",
          width: 200,
        },
        {
          label: "Email",
          field: "email",
          width: 200,
        },
        {
          label: "Telefoon",
          field: "phone",
          width: 200,
        },
        {
          label: "WhatsApp",
          field: "whatsapp",
          width: 200,
        },
        {
          label: "Rol",
          field: "role",
          width: 200,
        },
        {
          label: "Actie",
          field: "actie",
          width: 200,
        },
      ],
      rows: usersData.map(
        (data, index) =>
          data.role && {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            whatsapp: data.whatsapp,
            role: data.role,
            actie: (
              <>
                <Link to={"/useredit/" + data.id}> <button className="bg-sr ml-2 text-white px-2 py-2 rounded-md">
                  <MdModeEdit />
                </button>
                </Link>


                <button onClick={() => {
                  handleShow()
                  setUserId(data.id)
                }} className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                  <AiFillDelete className="w-5 h-5" />
                </button>
              </>
            )
          }
      ),
    };

    return (
      <>
        <AddUserModal
          modalShow={modalShow}
          setAdduser={setAdduser}
          setModalShow={setModalShow}
        />

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Waarschuwing!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Deze actie verwijdert de gebruiker en u kunt de gebruiker ook nooit toevoegen via zijn huidige e-mailadres.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuleren
            </Button>
            <Button onClick={() => {
              deleteUser(userId)
              handleClose()
              }} variant="primary">Verwijderen</Button>
          </Modal.Footer>
        </Modal>
        <div className="bg-pr text-white p-4 rounded-md">
          <h1 className="text-white font-medium text-center text-3xl">
            VOLTOOID
          </h1>
          <button
            onClick={() => setModalShow(true)}
            className="px-2 py-2 bg-sr text-white rounded-md"
          >
            Voeg gebruiker toe
          </button>
          <MDBDataTable responsiveMd hover bordered data={data} />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Users;

// admin email = admin@admin.com
// passoword = admin12123
