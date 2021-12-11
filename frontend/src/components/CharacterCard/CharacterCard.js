import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

const { Meta } = Card;

const CharacterCard = (props) => {
  const { setDeleteModalVisible, setIdToDelete, setNameToDelete } = props;
  const { id, fullName: name, title, family, imageUrl} = props.data;
  const navigate = useNavigate();
  const editClicked = () => {
    navigate(`/characters/${id}`);
  };

  const deleteClicked = () => {
    setDeleteModalVisible(true);
    setIdToDelete(id);
    setNameToDelete(name);
  };

  return (
    <Card
      style={{
        width: 250,
        margin: 25,
        boxShadow: "rgb(136 136 136) -3px -2px 5px",
      }}
      cover={
        <img
          style={{
            width: 250,
            height: 200,
            margin: "auto",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="example"
          src={imageUrl}
        />
      }
      actions={[
        <EditOutlined key="edit" onClick={editClicked} />,
        <DeleteOutlined key="delete" onClick={deleteClicked}/>,
      ]}
    >
      <Meta title="Name" description={name} />
      <hr />
      <Meta title="Title" description={title} />
      <hr />
      <Meta title="Family" description={family} />
    </Card>
  );
};

export default CharacterCard;
