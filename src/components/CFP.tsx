import React from "react";
import Link from "next/link";
const CFP = () => {
  return (
    <div className="p-2 space-y-3">
      <h1 className="font-bold text-2xl my-3">Call for Papers</h1>
     <p>DISCOVER solicits paper submissions across six tracks as listed below. Kindly note that the submissions are not limited to the topics mentioned in each track.</p>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">Track 1: Distributed Computing</p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
        <li>Multi-core Architecture</li>
        <li>Parallel & Distributed Systems</li>
        <li>Agent-Based Systems</li>
        <li>Autonomic Computing</li>
        <li>Mobile & Ubiquitous Computing</li>
        <li>Service-Oriented Computing</li>
        <li>Scalable Servers and Systems</li>
        <li>Intelligent Computing</li>
        <li>Secured Computing</li>
      </ul>
      <ul  className="list-disc">
     <li>GPU Programming</li>
     <li>Parallel & Distributed Algorithms</li>
     <li>Compiler Technologies for HPC</li>
     <li>Peer to Peer Computing</li>
     <li>Cloud Computing</li>
     <li>Network Storage Systems</li>
     <li>High Performance Storage Systems</li>
     <li>Edge Computing</li>
     <li>Serverless Computing</li>

      </ul>
    </div>
     </div>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">Track 2: Communications </p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
    <li>Network Algorithms</li>
    <li>Network Control & Management</li>
    <li>Disaster Recovery of Networks</li>
    <li>Cognitive Communications</li>
    <li>Wireless Sensor Networks</li>
    <li>Software Defined Networks</li>
    <li>Future Internet Architecture</li>
    <li>Optical Networks</li>
    <li>Internet of Things</li>
    <li>Network Performance Analysis</li>
    <li>QoS for Emergency Applications</li>
    <li>Optical Communications</li>
    <li>Photonics</li>
      </ul>
      <ul  className="list-disc">
      <li>Wireless and Mobile Networks</li>
    <li>Ad hoc and Mesh Networks</li>
    <li>Named Data Networking</li>
    <li>LTE and 5G Networks</li>
    <li>Body Area Networks</li>
    <li>Unmanned Aerial Vehicle Networks</li>
    <li>RF and Microwave Engineering</li>
    <li>Antenna Engineering</li>
    <li>Waveguide and Filter design</li>
    <li>Microwave Compatibility</li>
    <li>Electromagnetic Interference</li>
    <li>Microwave Theory and Techniques</li>
    <li>Optical Fiber Communications</li>

      </ul>
    </div>
     </div>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">
Track 3: VLSI</p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
    <li>VLSI Circuits and Systems</li>
    <li>RF Circuit Design and Testing</li>
    <li>Emerging Trends in VLSI</li>
    <li>Reconfigurable Systems</li>
    <li>System on Chip</li>
    <li>Heat Dissipation Analysis</li>
    <li>Design of MEMS Devices</li>
    <li>Optical MEMS Devices</li>
    <li>Nanotechnology</li>
    <li>Photovoltaics</li>
      </ul>
      <ul  className="list-disc">
      <li>Analog / Mixed Signals</li>
    <li>RF Circuit Analysis</li>
    <li>Field Programmable Systems</li>
    <li>System Level Design</li>
    <li>Physical Design and Testing</li>
    <li>Power Awareness Analysis</li>
    <li>Design of NEMS Devices</li>
    <li>Electrical Packaging / Codesign</li>
    <li>Thin Film and Devices</li>

      </ul>
    </div>
     </div>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">
Track 4: Electrical and Electronic Circuits </p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
    <li>Electrical AC/DC Circuits</li>
    <li>Analog and Digital Circuits</li>
    <li>High-speed/low-power circuits</li>
    <li>Near and sub-threshold circuits</li>
      </ul>
      <ul  className="list-disc">
      <li>Nonlinear Circuits & Systems</li>
    <li>Neural/fuzzy-logic circuits</li>
    <li>Energy-efficient systems and circuits</li>
    <li>FPGA based systems</li>

      </ul>
    </div>
     </div>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">
      Track 5: Robotics </p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
    <li>Robotic Technologies</li>
    <li>Robots for Industrial Applications</li>
    <li>Robots for Domestic Premises</li>
    <li>Robots for Education</li>
      </ul>
      <ul  className="list-disc">
      <li>Robots for Health Care</li>
    <li>Robots for Transportation</li>
    <li>Robots for Commercial Usage</li>
    <li>Humanoids</li>

      </ul>
    </div>
     </div>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">
      Other Important Links </p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
    <li><Link className="hover:underline text-green-400" href="#" target="_blank">Important Dates</Link></li>
    <li><Link className="hover:underline text-green-400" href="#" target="_blank">Paper Submission Detatails</Link></li>
    <li> <Link className="hover:underline text-green-400" href="#" target="_blank">Registration Details</Link></li>
      </ul>
      
    </div>
     </div>
     <div className="">
      <p className="p-3 text-white rounded-md bg-[#323332]">
     
Best Paper Awards </p>
    <div className="flex space-x-3 justify-center ml-6">
    <ul className="list-disc">
    <li>Technical Programme Committee of DISCOVER will select One Best Paper in each of the tracks mentioned above.</li>
    <li>It is mandatory to present the paper during the Conference so as to be considered for Best Paper Award.</li>
    <li> Best Paper Awards will be announced and distributed during the Conference.</li>
      </ul>
      
    </div>
     </div>
    </div>
  );
};

export default CFP;
