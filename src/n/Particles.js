import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useMemo} from "react";

const ParticlesComponent = (props) => {
    const options = useMemo(() => {
        return {
            background: {
                color: "#000",
            },
            fullScreen: {
                enable: true,
                zIndex: 0,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    }
                },
                modes: {
                    push:{
                    quantity: 15,
                },
                repulse: {
                    distance: 100
                },
                },
            },
            particles: {
                links:{
                    enable:true,
                    distance: 150,
                },
                move: {
                    enable: true,
                    speed: { min: 3, max: 5 }
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }
                },
                size: {
                    value: { min: 2, max: 5 }
                },
            },
        };
    },[]);
    
    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    },[]);

    return <Particles id={props.id} init={particlesInit} options={options} ></Particles>
}
export default ParticlesComponent;
