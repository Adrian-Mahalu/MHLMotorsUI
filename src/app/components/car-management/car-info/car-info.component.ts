import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Car } from 'src/app/models/car-models/car';
import { CarsService } from 'src/app/services/cars.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-car-info',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  carId: string;
  car: Car;
  carDetails: { label: string, value: string | number }[] = [];
  performanceSpecs: { label: string, value: string | number }[] = [];
  engineSpecs: { label: string, value: string | number }[] = [];
  spaceVolumeWeightsSpecs: { label: string, value: string | number }[] = [];
  dimensionsSpecs: { label: string, value: string | number }[] = [];
  drivetrainBrakesSuspensionSpecs: { label: string, value: string | number }[] = [];
  displayedColumns: string[] = ['label', 'value'];
  
  constructor(private activatedRoute: ActivatedRoute, private carService: CarsService) {

  }

  ngOnInit(): void {
    this.carId = this.activatedRoute.snapshot.paramMap.get('carId') as string;
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.carId = params.get('carId');
    // });
    this.carService.getCarById(this.carId).subscribe((result: Car) => 
    { 
      this.car = result;
      console.log(this.car);
      this.carDetails = [
        { label: 'Brand', value: this.car.brandName },
        { label: 'Model', value: this.car.modelName },
        { label: 'Generation', value: this.car.generationName },
        { label: 'Engine', value: this.car.engineName },
        { label: 'Start of production', value: this.car.startOfProduction },
        { label: 'End of production', value: this.car.endOfProduction },
        { label: 'Powertrain Architecture', value: this.car.powertrainArchitecture },
        { label: 'Body type', value: this.car.bodyType },
        { label: 'Seats', value: this.car.seats },
        { label: 'Doors', value: this.car.doors }
      ];
      
      this.performanceSpecs = [
        { label: 'Fuel economy - Urban', value: this.car.fuelEconomyUrban },
        { label: 'Fuel economy - Extra urban', value: this.car.fuelEconomyExtraUrban },
        { label: 'Fuel economy - Combined', value: this.car.fuelEconomyCombined },
        { label: 'Fuel Type', value: this.car.fuelType },
        { label: 'Acceleration 0 - 100 km/h', value: this.car.acceleration0To100KmH },
        { label: 'Acceleration 0 - 62 mph', value: this.car.acceleration0To62MpH },
        { label: 'Maximum speed', value: this.car.maximumSpeed },
        { label: 'Emission standard', value: this.car.emissionStandard },
        { label: 'Weight-to-power ratio', value: this.car.weightToPowerRatio },
        { label: 'Weight-to-torque ratio', value: this.car.weightToTorqueRatio },
      ];
  
      this.engineSpecs = [
        { label: 'Power', value: this.car.power },
        { label: 'Power per litre', value: this.car.powerPerLitre },
        { label: 'Torque', value: this.car.torque },
        { label: 'Engine layout', value: this.car.engineLayout },
        { label: 'Engine Model/Code', value: this.car.engineModelCode },
        { label: 'Engine displacement', value: this.car.engineVolume },
        { label: 'Number of cylinders', value: this.car.numberOfCylinders },
        { label: 'Engine configuration', value: this.car.engineConfiguration },
        { label: 'Cylinder Bore', value: this.car.cylinderBore },
        { label: 'Piston Stroke', value: this.car.pistonStroke },
        { label: 'Compression ratio', value: this.car.compressionRatio },
        { label: 'Number of valves per cylinder', value: this.car.numberOfValvesPerCylinder },
        { label: 'Fuel injection system', value: this.car.fuelInjectionSystem },
        { label: 'Engine aspiration', value: this.car.engineAspiration },
        { label: 'Engine oil capacity', value: this.car.engineOilCapacity },
        { label: 'Coolant', value: this.car.coolant },
        { label: 'Engine systems', value: this.car.engineSystems },
      ];
  
      this.spaceVolumeWeightsSpecs = [
        { label: 'Kerb Weight', value: this.car.kerbWeight },
        { label: 'Max. weight', value: this.car.maximumWeight },
        { label: 'Max load', value: this.car.maximumLoad },
        { label: 'Trunk space', value: this.car.trunkSpace },
        { label: 'Fuel tank capacity', value: this.car.fuelTankCapacity },
        { label: 'Max. roof load', value: this.car.maximumRoofLoad },
        { label: 'Permitted trailer load with brakes (12%)', value: this.car.permittedTrailerLoadWithBrakes },
        { label: 'Permitted towbar download', value: this.car.permittedTowBarDownload },
      ];
  
      this.dimensionsSpecs = [
        { label: 'Length', value: this.car.length },
        { label: 'Width', value: this.car.width },
        { label: 'Height', value: this.car.height },
        { label: 'Wheelbase', value: this.car.wheelbase },
        { label: 'Front track', value: this.car.frontTrack },
        { label: 'Rear track', value: this.car.rearTrack },
        { label: 'Ride height (ground clearance)', value: this.car.rideHeight },
        { label: 'Drag coefficient (Cd)', value: this.car.dragCoefficient },
        { label: 'Minimum turning circle (turning diameter)', value: this.car.turningDiameter },
      ];
  
      this.drivetrainBrakesSuspensionSpecs = [
        { label: 'Drive train architecture', value: this.car.driveTrainArchitecture },
        { label: 'Drive wheel', value: this.car.driveWheel },
        { label: 'Number of gears and type of gearbox', value: this.car.typeOfGearbox },
        { label: 'Front suspension', value: this.car.frontSuspension },
        { label: 'Rear suspension', value: this.car.rearSuspension },
        { label: 'Front brakes', value: this.car.frontBrakes },
        { label: 'Rear brakes', value: this.car.rearBrakes },
        { label: 'Assisting systems', value: this.car.assistingSystems },
        { label: 'Steering type', value: this.car.steeringType },
        { label: 'Power steering', value: this.car.powerSteering },
        { label: 'Tires size', value: this.car.tiresSize },
        { label: 'Wheel rims size', value: this.car.wheelRimsSize },
      ];  
    });
  }
}
