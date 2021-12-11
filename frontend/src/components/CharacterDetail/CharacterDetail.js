import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Image, Input } from "antd";
import "./CharacterDetail.css";

const serverUrl = "http://localhost:3000";

const CharacterDetail = (props) => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetch(`${serverUrl}/got-characters/${id}`)
      .then((response) => response.json())
      .then((characterData) => {
        setCharacterData(characterData);
      });
  }, [id]);
  const navigate = useNavigate();

  const saveButtonClicked = () => {
    fetch(`${serverUrl}/got-characters/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(characterData),
    })
      .then((response) => response.json())
      .then((response) => {
        navigate("/");
      });
  };

  const backButtonClicked = () => {
    navigate("/");
  };

  const nameChanged = (e) => {
    setCharacterData((previousCharacterData) => {
      return {
        ...previousCharacterData,
        fullName: e.target.value,
      };
    });
  };
  const titleChanged = (e) => {
    setCharacterData((previousCharacterData) => {
      return {
        ...previousCharacterData,
        title: e.target.value,
      };
    });
  };
  const familyChanged = (e) => {
    setCharacterData((previousCharacterData) => {
      return {
        ...previousCharacterData,
        family: e.target.value,
      };
    });
  };
  return (
    <div id="detail-container">
      <Image width={300} src={characterData.imageUrl} />
      <div className="value-input">
        <Input
          placeholder="Enter name..."
          addonBefore={<p className="input-label">Name</p>}
          value={characterData.fullName}
          onChange={nameChanged}
        />
      </div>
      <div className="value-input">
        <Input
          placeholder="Enter title..."
          addonBefore={<p className="input-label">Title</p>}
          value={characterData.title}
          onChange={titleChanged}
        />
      </div>
      <div className="value-input">
        <Input
          placeholder="Enter family..."
          addonBefore={<p className="input-label">Family</p>}
          value={characterData.family}
          onChange={familyChanged}
        />
      </div>
      <div id="actions-container">
        <Button type="primary" onClick={saveButtonClicked}>
          Save
        </Button>
        <Button type="secondary" onClick={backButtonClicked}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default CharacterDetail;
