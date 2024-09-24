'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link"
import { Button, Form, Table } from "react-bootstrap"
import { FaCheck, FaPlusCircle } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";


export default function Page() {
    return (
        <Pagina titulo="Empresas">

                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logo">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="success">
                                <FaCheck />Salvar
                            </Button>
                            <Link
                                href="/empresas/create" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack />Voltar
                            </Link>
                        </div>
                    </Form>
        </Pagina>
    )
}