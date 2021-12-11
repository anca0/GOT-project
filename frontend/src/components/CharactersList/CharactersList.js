import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import CreateModal from "../CreateModal/CreateModal";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import "./CharactersList.css";

const serverUrl = "http://localhost:3000";

const CharactersList = () => {
  const [data, setData] = useState([]);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [idToDelete, setIdToDelete] = useState(false);
  const [nameToDelete, setNameToDelete] = useState(false);

  useEffect(() => {
    fetch(`${serverUrl}/got-characters`)
      .then((response) => response.json())
      .then((charactersArray) => {
        setData(charactersArray);
      });
  }, []);

  const createButtonClicked = () => {
    setCreateModalVisible(true);
  };

  
  const onConfirmDeleteClicked = () => {
     fetch(`${serverUrl}/got-characters/${idToDelete}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setDeleteModalVisible(false);
            // eslint-disable-next-line
            location.reload();
        });
  };

  const onCancelDeleteModalClicked = () => {
    setDeleteModalVisible(false);
  };

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Game Of Thrones Wiki</h2>
      <Button type="primary" style={{position: "fixed", top: 20, right: 50., zIndex:10}} onClick={createButtonClicked}>
          Create
        </Button>
      <div id="cards-container">
        {data.map((characterData) => (
          <CharacterCard 
            data={characterData} 
            key={characterData.id} 
            setDeleteModalVisible={setDeleteModalVisible} 
            setIdToDelete={setIdToDelete} 
            setNameToDelete={setNameToDelete}
          />
        ))}
      </div>
      <CreateModal createModalVisible={createModalVisible} setCreateModalVisible={setCreateModalVisible}/>
      <Modal
          title={`Do you really want to delete "${nameToDelete}"?`}
          visible={deleteModalVisible}
          onOk={onConfirmDeleteClicked}
          onCancel={onCancelDeleteModalClicked}
          okText="Delete"
          cancelText="Cancel"
        />
    </div>
  );
};

export default CharactersList;
