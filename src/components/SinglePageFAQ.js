import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import aus from "../assets/aus.png";

const SinglePageFAQ = ({ description }) => {
    return (
        <div>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton >
                            <Box flex='1' textAlign='left'>
                                PRODUCT INFO
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{ description }</AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                HOW TO USE
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Close eyes, spray onto face and neck. Use throughout the day to refresh and hydrate dry skin.


                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                THE INGREDIENTS
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Water (Aqua), Rosa Damascena Flower Water (Rose), Glycerin, Chamomilla Recutita (Matricaria) Flower Extract (Chamomile), Citric Acid, Phenoxyethanol.

                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                BRAND VALUES
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <img src={aus} />
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default SinglePageFAQ