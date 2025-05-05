export interface PlatoMenu {
    id: number;
    documentId: string;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    Categoria_plato: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Imagen_plato: Array<{
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail?: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                sizeInBytes: number;
                url: string;
            };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }>;
}
