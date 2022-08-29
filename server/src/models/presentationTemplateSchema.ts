import mongoose, { Document, Schema } from "mongoose";
export interface IPresentationTemplate extends Document {
    templateOwnerDid:string,
    queryType: string,
    domain: string,
    name: string,
    issuerDid: [],
    schemaId: string,
    reason: string,
    required: boolean,
    callbackUrl: string,
}




export const PresentationTemplateSchema = new Schema({
    templateOwnerDid:{type:String,required:true},
    queryType: { type: String, required: true },
    domain: { type: String, required: true },
    name: { type: String, required: false },
    issuerDid: { type: Array<String>, required: true },
    schemaId: { type: String, required: true },
    reason: { type: String, required: true },
    required: { type: Boolean, required: false },
    callbackUrl: { type: String, required: true },


})

export default mongoose.model<IPresentationTemplate>('PresentationTemplateSchema', PresentationTemplateSchema)