import React, {useState} from 'react'
import { Modal, Input } from "antd";
import { uuid } from "uuidv4";
import "./CreateModal.css";

const serverUrl = "http://localhost:3000";

const CreateModal = ({ createModalVisible, setCreateModalVisible }) => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [family, setFamily] = useState("");
    const [imageURL, setImageURL] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const confirmCreateClicked = () => {
        setIsLoading(true);
        const dataToCreate = {
            id: uuid(),
            fullName: name,
            title: title,
            family: family,
            imageUrl: imageURL
        };

        fetch(`${serverUrl}/got-characters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToCreate),
        })
        .then((response) => response.json())
        .then((response) => {
            setIsLoading(false);
            setCreateModalVisible(false);
            // eslint-disable-next-line
            location.reload();
        });
    };

    const cancelButtonClicked = () => {
        setCreateModalVisible(false);
    };
    
    const nameChanged = (e) => {
        setName(e.target.value);
    };

    const titleChanged = (e) => {
        setTitle(e.target.value);
    };

    const familyChanged = (e) => {
        setFamily(e.target.value);
    };

    const imageUrlChanged = (e) => {
        setImageURL(e.target.value);
    }

    return (
        <Modal
        title="Add a new GOT Character"
        visible={createModalVisible}
        onOk={confirmCreateClicked}
        confirmLoading={isLoading}
        onCancel={cancelButtonClicked}
      >
        <div id="create-modal-content">
          <div className="modal-value-input">
            <Input
              placeholder="Enter name..."
              addonBefore={<p className="modal-input-label">Name</p>}
              value={name}
              onChange={nameChanged}
            />
          </div>
          <div className="modal-value-input">
            <Input
              placeholder="Enter title..."
              addonBefore={<p className="modal-input-label">Title</p>}
              value={title}
              onChange={titleChanged}
            />
          </div>
          <div className="modal-value-input">
            <Input
              placeholder="Enter family..."
              addonBefore={<p className="modal-input-label">Family</p>}
              value={family}
              onChange={familyChanged}
            />
          </div>
          <div className="modal-value-input">
            <Input
              placeholder="Enter image url..."
              addonBefore={<p className="modal-input-label">Image URL</p>}
              value={imageURL}
              onChange={imageUrlChanged}
            />
          </div>
        </div>
      </Modal>
    )
}

export default CreateModal
