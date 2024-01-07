import React from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { UserOutlined } from "@ant-design/icons";

function SignUp({ open, onCreate, onCancel }) {
  const [form] = useForm();

  return (
    <>
      <Modal
        style={{ maxWidth: 290 }}
        open={open}
        title="Crear cuenta"
        footer={null}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 290,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
    
          <UserOutlined />
          <Form.Item
            label="Usuario"
            name="Usuario"
            rules={[
              {
                required: true,
                message: "Ingrese su usuario",
              },
            ]}
          >
            
            <Input placeholder="Juan2002" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Ingrese su Email",
              },
            ]}
          >
            <Input placeholder="youremail@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="Contraseña"
            rules={[
              {
                required: true,
                message: "Ingrese su contraseña",
              },
            ]}
          >
            <Input.Password placeholder="12345" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default SignUp;
