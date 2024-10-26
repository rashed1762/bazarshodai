import { connectMongoDB } from "@/lib/mongodb"
import { services } from "@/lib/services";

export const GET=async()=> {
    const db= await connectMongoDB()
    const servicesCollection=db.collection('services')

    try{
        await servicesCollection.deleteMany();
        const resp=await servicesCollection.insertMany(services)
        return Response.json({message:"seed successfully"})
    } catch (error){
        console.log(error);
    }
}