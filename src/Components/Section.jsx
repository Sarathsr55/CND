import {motion} from 'framer-motion'

export const Section = (props)=>{
    const {children} = props

    
    return (
    <motion.section 
        style={{
           height:'100vh',
           width:'100vw',
           display:'flex',
           flexDirection:'column',
           alignItems:'flex-start',
           justifyContent:'flex-start',
           position:'relative',
            margin:0
        }}
        className='sections'
        initial={{
            opacity:0,
            y:50,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:0.6
            }
        }}
    >
        {children}
    </motion.section>
    )
}