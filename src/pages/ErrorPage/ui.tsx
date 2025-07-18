import { Card, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const {Title}= Typography
export const ErrorPage: React.FunctionComponent = 
    () => {
    return (
        <Card title="Ошибка">
            <Title level = {5}>Такой страницы не существует</Title>
            <Link to="/">На главную страницу</Link>
        </Card>
    )
}
