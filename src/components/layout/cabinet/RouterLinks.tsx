import React from 'react'
import {Box, Text, Link, useColorMode} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom'
import {Block} from "../../../config/ui/Block";

interface RouterLinksInterface {
}


export const RouterLinks: React.FC<RouterLinksInterface> = () => {
    const {colorMode} = useColorMode();
    const iconColor = colorMode === 'light' ? "#1C273C" : "#fff"
    return (
        <Block variant={'empty'} w={'100%'}>

            <Link as={RouterLink} to={'/'}
                  px={'1.25rem'}
                  d='flex'
                  alignItems='center'
                  py='.875rem'
                  _hover={{color: '#36AB7E'}}
                  _focus={{}}
            >
                <Box w={5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="20" viewBox="0 0 19.998 20">
                        <g id="home_1_" data-name="home (1)" transform="translate(-0.02 0)">
                            <path id="Контур_1" data-name="Контур 1"
                                  d="M19.48,8.7l0,0L11.321.539a1.841,1.841,0,0,0-2.6,0L.562,8.693.554,8.7a1.84,1.84,0,0,0,1.225,3.137l.057,0h.325v6A2.157,2.157,0,0,0,4.316,20H7.508a.586.586,0,0,0,.586-.586V14.707a.984.984,0,0,1,.983-.983H10.96a.984.984,0,0,1,.983.983v4.707a.586.586,0,0,0,.586.586h3.192a2.157,2.157,0,0,0,2.155-2.155v-6h.3A1.842,1.842,0,0,0,19.48,8.7Zm-.83,1.774a.665.665,0,0,1-.473.2H17.29a.586.586,0,0,0-.586.586v6.59a.984.984,0,0,1-.983.983H13.115V14.707a2.157,2.157,0,0,0-2.155-2.155H9.077a2.158,2.158,0,0,0-2.155,2.155v4.121H4.316a.984.984,0,0,1-.983-.983v-6.59a.586.586,0,0,0-.586-.586h-.9a.669.669,0,0,1-.461-1.142h0L9.545,1.368a.669.669,0,0,1,.946,0l8.156,8.156,0,0a.671.671,0,0,1,0,.946Zm0,0"
                                  fill={iconColor}/>
                        </g>
                    </svg>
                </Box>
                <Text pl={'1rem'}>Кабинет</Text>
            </Link>
            <Link as={RouterLink} to={'/staff'}
                  px={'1.25rem'}
                  d='flex'
                  alignItems='center'
                  py='.875rem'
                  _hover={{color: '#36AB7E'}}
                  _focus={{}}
            >
                <Box w={5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.998" height="20" viewBox="0 0 19.998 20">
                        <g id="home_1_" data-name="home (1)" transform="translate(-0.02 0)">
                            <path id="Контур_1" data-name="Контур 1"
                                  d="M19.48,8.7l0,0L11.321.539a1.841,1.841,0,0,0-2.6,0L.562,8.693.554,8.7a1.84,1.84,0,0,0,1.225,3.137l.057,0h.325v6A2.157,2.157,0,0,0,4.316,20H7.508a.586.586,0,0,0,.586-.586V14.707a.984.984,0,0,1,.983-.983H10.96a.984.984,0,0,1,.983.983v4.707a.586.586,0,0,0,.586.586h3.192a2.157,2.157,0,0,0,2.155-2.155v-6h.3A1.842,1.842,0,0,0,19.48,8.7Zm-.83,1.774a.665.665,0,0,1-.473.2H17.29a.586.586,0,0,0-.586.586v6.59a.984.984,0,0,1-.983.983H13.115V14.707a2.157,2.157,0,0,0-2.155-2.155H9.077a2.158,2.158,0,0,0-2.155,2.155v4.121H4.316a.984.984,0,0,1-.983-.983v-6.59a.586.586,0,0,0-.586-.586h-.9a.669.669,0,0,1-.461-1.142h0L9.545,1.368a.669.669,0,0,1,.946,0l8.156,8.156,0,0a.671.671,0,0,1,0,.946Zm0,0"
                                  fill={iconColor}/>
                        </g>
                    </svg>
                </Box>
                <Text pl={'1rem'}>Состав</Text>
            </Link>
        </Block>
    )
};