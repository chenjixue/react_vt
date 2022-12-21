import React, { useEffect, useRef, useState } from 'react';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import Style from "./login.module.scss"
import Line from "@/assets/img/line.png"
import { getQcCode } from "@/request/api"
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const line = useRef<HTMLTableDataCellElement>(null)
    const line2 = useRef<HTMLTableDataCellElement>(null)
    let lineDom = line.current
    let lineDom2 = line2.current
    const nav = useNavigate()
    // 模拟 class 组件的 DidMount
    useEffect(() => {
        lineDom = line.current
        lineDom2 = line2.current
        getQcCode()
        let timerId = showAnimateLine()
        return () => {
            window.clearInterval(timerId)
        }
    }, [])
    function showAnimateLine() {
        var speed = 6;
        function Marquee() {
            if (!lineDom || !lineDom2) {
                return
            }
            if (lineDom2.offsetWidth - lineDom.scrollLeft <= 0) {
                lineDom.scrollLeft -= lineDom.offsetWidth;
            }
            else {
                lineDom.scrollLeft++
            }
        }
        return setInterval(Marquee, speed);
    }
    const onFinish = (values: any) => {
        console.log('Success:', values);
        nav("/cpt")
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <div className={Style.login_context}>
        <div ref={line} className={Style.water_flow}>
            <span ref={line}>
                <img src={Line} style={{ opacity: '0.2' }} />
            </span>
            <span ref={line2} >
                <img src={Line} style={{ marginLeft: '-3px', opacity: '0.2' }} />
            </span>
        </div>
        <div className={Style.form_erea}>
            <Form
                name="basic"
                labelCol={{ span: 7 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ margin: "0 auto" }}
            >
                {/* <div className={Style.title}>
                    欢迎测试此管理系统
                </div> */}
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入你的用户名' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入你的密码' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="验证码"
                    name="valiateCode"
                    rules={[{ required: true, message: '请输入验证码' }]}
                >
                    <Row>
                        <Col span={16}> <Input /></Col>
                        <Col span={1}></Col>
                        <Col span={7}><div style={{ background: 'red' }}>验证码</div></Col>
                    </Row>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 7, }}>
                    <Button type="primary" htmlType="submit" className={Style.submit_button}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}
export default Login