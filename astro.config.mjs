// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/projects/lightweight-autonomous-suas': '/Autonomous Drone Software',
        '/projects/exoskeletal-composite-reinforcement': '/Invincible Aerostructures',
        'projects/aerodynamic-guided-parachute': '/Aerodynamic Guided Parachute',
        'projects/rotary-guided-parachute': '/Rotor Guided Parachute',
        'projects/l1-rocket': '/L1 High Power Rocket',
        'projects/enes102-truss': '/Highest Performing Truss'

      }
});
