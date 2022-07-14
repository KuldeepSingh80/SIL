import React, { useState } from 'react';
import { Link } from "react-router-dom";

import '../Home.css';
import HomeBackground from '../img/home_bg.jpg'
import BhabiLogo from '../img/logo.svg'



import 'antd/dist/antd.css';
import '../index.css';
import { PlusOutlined } from '@ant-design/icons';
import { Col, Row, Button, Modal, Checkbox, Form, Input, Upload } from 'antd';





const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


const Home = () => {

  const [visibleJoinRoom, setVisibleJoinRoom] = useState(false);

  const showModalJoinRoom = () => {
    setVisibleJoinRoom(true);
  };

  const handleOkJoinRoom = () => {
    setVisibleJoinRoom(false);
  };

  const handleCancelJoinRoom = () => {
    setVisibleJoinRoom(false);
  };




  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };













  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );










  return (
    <>








      <section className='home_wrrpr'>
        <div className='container'>
          <Row>
            <Col span={24} className="home_dv1">
              {/* <div className='home_dv2' style={{ backgroundImage: `url(${HomeBackground})` }}> */}
              <div className='home_dv2'style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp3354895.jpg)` }}>
                <div className='home_dv3'>
                  <div className='home_title'>
                    {/* <h1>Bhabi</h1> */}
                    {/* <span>(SYL)</span> */}
                    <img src={BhabiLogo} alt="logo" />
                  </div>
                  <ul className='home_buttons'>
                    <li>
                      <button className='btn' onClick={showModalJoinRoom}>Join Room</button>
                    </li>
                    <li>
                      <button className='btn' onClick={showModalJoinRoom}>Create Room</button>
                    </li>
                    <li><Link to="table">GO</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>











































      <Modal
        visible={visibleJoinRoom}
        title="Join Room"
        onOk={handleOkJoinRoom}
        onCancel={handleCancelJoinRoom}
        footer={null}
        className='popup_style1'
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Room Number"
            name="room_number"
            rules={[
              {
                required: true,
                message: 'Please enter your room Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Room Password"
            name="room_password"
            rules={[
              {
                required: true,
                message: 'Please enter your room password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Your Name"
            name="your_name"
            rules={[
              {
                required: true,
                message: 'Please enter your room password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Your Image"
            name="your_image"
            rules={[
              {
                required: true,
                message: 'Please upload your Image!',
              },
            ]}
          >
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              className="ant-form-item"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img alt="example" style={{ width: '100%', }} src={previewImage} />
            </Modal>
          </Form.Item>
          <div className='modal_foter'>
            <Button key="back" onClick={handleCancelJoinRoom}> Cancel </Button>
            <Button type="primary" htmlType="submit"> Submit </Button>
          </div>
        </Form>
      </Modal>


































      <Modal
        visible={visibleJoinRoom}
        title="Create Room"
        onOk={handleOkJoinRoom}
        onCancel={handleCancelJoinRoom}
        footer={null}
        className='popup_style1'
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Room Number"
            name="room_number"
            rules={[
              {
                required: true,
                message: 'Please enter your room Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Room Password"
            name="room_password"
            rules={[
              {
                required: true,
                message: 'Please enter your room password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Your Name"
            name="your_name"
            rules={[
              {
                required: true,
                message: 'Please enter your room password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Your Image"
            name="your_image"
            rules={[
              {
                required: true,
                message: 'Please upload your Image!',
              },
            ]}
          >
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              className="ant-form-item"
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img alt="example" style={{ width: '100%', }} src={previewImage} />
            </Modal>
          </Form.Item>
          <div className='modal_foter'>
            <Button key="back" onClick={handleCancelJoinRoom}> Cancel </Button>
            <Button type="primary" htmlType="submit"> Submit </Button>
          </div>
        </Form>
      </Modal>






































    </>
  )
}

export default Home