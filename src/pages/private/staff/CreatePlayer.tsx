import React, {ChangeEvent, FormEvent, useState} from 'react'
import {Block} from "../../../config/ui/Block";
import {Box, Button, Flex, Input, Text} from "@chakra-ui/react";
import ImageUploading, {ImageListType} from "react-images-uploading";
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker/dist/react-datepicker";

interface CreatePlayerFormInterface {
    name: string
    surname: string
    fatherName: string
    gameNumber: number
    birth: string | number | readonly string[] | undefined
    nationality: string
    placeOfBirth: string
    height: number
    position: string
    age: number
    image: any
    teamId: number
}

export const CreatePlayer: React.FC = () => {
    const [disable, setDisable] = useState<boolean>(false)
    const [form, setForm] = useState<CreatePlayerFormInterface>({
        name: "",
        surname: "",
        fatherName: "",
        gameNumber: 0,
        birth: new Date().toLocaleDateString(),
        nationality: "",
        placeOfBirth: "",
        height: 170,
        position: '',
        age: 18,
        teamId: 0,
        image: []
    })
    const dateHandler = (date) =>  setForm( state => ({ ...state,birth:  new Date(date).toLocaleDateString()}));

    const inputHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target
        setForm(state => ({
            ...state,
            [name]: value
        }))
    }
    const imageUploaderHandler = (imageList: ImageListType) => setForm(state => ({
        ...state,
        icon: imageList as never[]
    }));
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('submitHandler')
    }
    return (
        <>
            <Block py={6} maxW={{md: "540ox", xs: "100%"}}>
                <Text as={'h2'} fontWeight={600} textAlign={"center"} fontSize={"2rem"}>Форма создания команды</Text>
                <form onSubmit={submitHandler}>
                    <Box p={4}>
                        <Text mb="8px">
                            Имя
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.name}
                            name='name'
                            onChange={inputHandler}
                            placeholder="Введите Имя игрока"
                            size="sm"
                            px={2}
                            isDisabled={disable}
                            required
                            _disabled={{
                                cursor: "not-allowed",
                            }}
                        />
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            Фамилия игрока
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.surname}
                            name='surname'
                            onChange={inputHandler}
                            placeholder="Введите Фамилию игрока"
                            size="sm"
                            px={2}
                            isDisabled={disable}
                            required
                            _disabled={{
                                cursor: "not-allowed",
                            }}
                        />
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            Отчество
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.fatherName}
                            name='fatherName'
                            onChange={inputHandler}
                            placeholder="Введите Отчетсво игрока"
                            size="sm"
                            px={2}
                            isDisabled={disable}
                            required
                            _disabled={{
                                cursor: "not-allowed",
                            }}
                        />
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            Игровой
                        </Text>
                        <Input
                            variant="flushed"
                            value={form.gameNumber}
                            name='gameNumber'
                            onChange={inputHandler}
                            placeholder="Введите Игровой номер игрока"
                            size="sm"
                            px={2}
                            isDisabled={disable}
                            required
                            _disabled={{
                                cursor: "not-allowed",
                            }}
                        />
                    </Box>
                    <Box p={4}>
                        <Text mb="8px">
                            День рождения!
                        </Text>
                        <DatePicker
                            value={form.birth}
                            onChange={dateHandler}
                        />
                        {/*<Input*/}
                        {/*    as={}*/}
                        {/*    variant="flushed"*/}
                        {/*    value={form.birth}*/}
                        {/*    onChange={dateHandler}*/}
                        {/*    size="sm"*/}
                        {/*    px={2}*/}
                        {/*    isDisabled={disable}*/}
                        {/*    required*/}
                        {/*    _disabled={{*/}
                        {/*        cursor: "not-allowed",*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </Box>
                    <Flex justifyContent={"center"} alignItems={"center"}>

                        <Button variant={"outline"}
                                colorScheme={"teal"}
                                isDisabled={disable}
                                type={"submit"}
                                mx={2}
                        >
                            Подтвердить</Button>
                        <Button variant={"outline"}
                                colorScheme={"red"}
                                isDisabled={disable}
                                type={"reset"}
                                mx={2}
                        >
                            Сбросить</Button>
                    </Flex>
                </form>
            </Block>
        </>
    )
}
