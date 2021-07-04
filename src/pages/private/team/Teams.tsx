import React, {useState} from 'react'
import {Button, Flex, Grid} from "@chakra-ui/react";
import {SkeletonStack} from "../../../components/ui/skeleton/SkeletonStack";
import {TeamsCard, TeamsCardInterface} from "./TeamsCard";
import {CreateTeam} from "./CreateTeam";


export const Teams: React.FC = () => {
    const [create, setCreate] = useState<boolean>(true)
    const [arr, setArr] = useState<TeamsCardInterface[] | []>([{
        icon: "",
        name: ""
    }])
    return (
        <>
            <Flex mb={2} justifyContent={"flex-end"}>
                <Button colorScheme={create ? "orange" : "blue"} variant="solid" size={'lg'}
                        onClick={() => setCreate(prevState => !prevState)}>
                    {create ? "Отменить" : "Добавить Команду"}
                </Button>
            </Flex>
            {create
                ? <CreateTeam/>
                : <Grid
                    templateColumns={{base: 'repeat(1, 1fr)', md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                    gap={6}>
                    {arr.length ? arr.map((item, key: number) => <TeamsCard
                            key={key}
                            icon='http://basketball.vizavi97.tmweb.ru/storage/app/uploads/public/609/570/bf6/609570bf6ba94977801792.png'
                            name='Мухаммадали'/>) :
                        <SkeletonStack length={3}/>
                    }
                </Grid>
            }

        </>
    )
}
