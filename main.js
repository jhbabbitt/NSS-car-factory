const createChassis = () => {
    const newChassisObject = {}
    return newChassisObject
}
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}
const addBody = (chassisObject) => {
	chassisObject.body = "Fever"
	return chassisObject
}
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two Wheel Drive"
    return chassisObject
}
let chassis = createChassis()
let chassisWithBody = addBody(chassis)
let chassisWithWHeels = addWheels(chassisWithBody)
let chassisWithEngine = addEngine(chassisWithWHeels)
let chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine)
let chassisWithDriveTrain = addDriveTrain(chassisWithSteeringWheel)
console.log(chassisWithDriveTrain)