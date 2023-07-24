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

const SinglePageFAQ = ({ description, reviewText, brand, discount}) => {
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
                    
                    <AccordionPanel pb={4}>{discount} discount</AccordionPanel>
                    <AccordionPanel pb={4}>{ description }</AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                REVIEWS
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {reviewText}


                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                BRAND
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {brand}

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