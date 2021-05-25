import droneWithLoad from '../media/projectwalla-drone-with-loaded-weight-FEA.jpeg';
import mountainLee from '../media/projectwalla-mountain-lee-waves-on-UAV.jpeg';
import controlBox from '../media/projectwalla-control-box.jpeg';
import cfd from '../media/projectwalla-ahmed-body-cfd.jpeg';
import ventilationChamber from '../media/projectwalla-boeing-767-ventilation-chamber.jpeg';
import geothermalPiles from '../media/projectwalla-thermal-behaviour-and-gluid-flow-characteristics.jpeg';
import fluidDynamics from '../media/projectwalla-Computational-Fluid-Dynamics-Study-of-S182-Airfoil-for-Various-Angle-of-Attack.jpeg';
const portfolioPosts =[
    {
        key: "post1",
        title: "Computational Fluid Dynamics Study of S182 Airfoil for Various Angle of Attack",
        text: "The comparison with literature results shows that the CFD approach used in this study can accurately predict the aerodynamic characteristics of wind turbine blades. We believe that the results shown in this paper will be useful for wind turbine blade design engineers.",
        url: fluidDynamics},
    {
        key: "post2",
        title: "Numerical Investigation of Thermal Behaviour and Fluid Flow Characteristics in Geothermal Energy Piles",
        text: "In this paper, the Conjugate Heat Transfer (CHT) analysis conducted on Geothermal Energy Piles (GEP) aims at studying and understanding their thermal behaviour and flow characteristics using ANSYS software. The numerical results are impressively in accordance with the literature results. We believe that the results shown in this paper will be beneficial for the Geothermal industry.",
        url: geothermalPiles},
    {
        key: "post3",
        title: "Boeing-767 Ventilation Chamber",
        text: "Ventilation system mainly of two types – mixing system and displacment system\n" +
            "Here , DPM Model is used to find out the particle tracking and flow of air supply inside the chamber and velocity profiles and temperature profiles extracted.\n",
        url: ventilationChamber},
    {
        key: "post4",
        title: "Ahmed Body CFD",
        text: "Ahmed body is a typical car body shape . In this particular thing, at different slant angles ,coefficient of drag and lift is calculated and got good results as expected in quantitative form.\n" +
            "The CFD analysis of Ahmed’s body with slant angles of 0°, 30° and 60° is studied using ANSYS FLUENT withsame fluid flow conditions. The Design Modeler tool of ANSYS is used for CAD model preparation of Ahmed’s body different cases. As the Reynold’s number lied in turbulent k-epsilon two equation turbulent model is used with transient flow analysis.\n",
        url: cfd},
    {
        key: "post5",
        title: "Control Box",
        text: "Cost Cutting of the Control box for the Automatic Sensored Taps by more than 50%",
        url: controlBox},
    {
        key: "post6",
        title: "Drone with loaded weight FEA",
        text: "12 Kg weight will be loaded and different post processing results like deformations, stress calculations ",
        url: droneWithLoad},
    {
        key: "post7",
        title: "Mountain Lee Waves on the UAV",
        text: "Mountain Waves is defined as oscillations to the lee side (downwind) of high ground resulting from\n" +
            "the disturbance in the horizontal airflow caused by the high ground.The numerical results are impressively in agreement with the experimental\n" +
            "results. We believe that the results shown in this paper will be more valuable information to the\n" +
            "aviation industry. This will also help train the pilots to control the aeroplanes under mountain lee\n" +
            "wave’s environment.\n",
        url: mountainLee,}
]
export {portfolioPosts}
