export interface School {
    campusName: string;
    campusAddress: string;
    gradeRange: string;
    location_1: {
        type: string,
        coordinations: [number, number],
    };
};
