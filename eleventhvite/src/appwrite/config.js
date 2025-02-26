import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client()
    databases
    bucket
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDataBaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("appwrite service : getPost()", error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDataBaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log("appwrite service : getPosts()", error)
            return false
        }
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            )
        } catch (error) {
            console.log("appwrite service : createPost()", error)
            return false
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status }
            )
        } catch (error) {
            console.log("appwrite service : updateDocument()", error)
            return false
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("appwrite service : deleteDocument()", error)
            return false
        }
    }
    async uploadFIle(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite service : uploadFile()", error)
            return false
        }
    }
    async deleteFIle(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("appwrite service : deleteFile()", error)
            return false
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId
        )
    }
}
