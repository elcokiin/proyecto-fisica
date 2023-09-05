import { useState } from 'react'
import { Header } from '../components/Header'
import { InputLarge } from '../components/InputLarge'
import { InputTemperature } from '../components/InputTemperature'
import { WidthContext, MaterialContext, TemperatureContext } from '../Contexts'

import { Cylinder } from '../components/Cylinder'
import { Materias } from '../components/Materias'

const R1 = () => {
    const [width, setWidth] = useState(125)
    const [material, setMaterial] = useState("Acero")
    const [temperature, setTemperature] = useState(25)

    return (
        <WidthContext.Provider value={width}>
            <MaterialContext.Provider value={material}>
                <TemperatureContext.Provider value={temperature}>
                    <Header />
                    <main className='pt-8'>
                        <section className='flex flex-col items-start w-3/5 ml-8 h-full overflow-hidden'>
                            <Cylinder />
                            <div className='w-full flex flex-col items-center mt-8 -ml-4 mb-8'>
                                <InputLarge setWidth={setWidth} />
                                <InputTemperature setWidth={setWidth} setTemperature={setTemperature} />
                            </div>
                            <Materias setMaterial={setMaterial} />
                        </section>
                        <div></div>
                    </main>
                </TemperatureContext.Provider>
            </MaterialContext.Provider>
        </WidthContext.Provider>
    )
}

export default R1