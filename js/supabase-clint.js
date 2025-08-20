// Configuración de Supabase - Reemplaza con tus valores
const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_ANON_KEY = 'tu-clave-publica-supabase';

// Crear cliente Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Función para guardar datos en Supabase
async function saveToSupabase(data) {
    try {
        const { error } = await supabaseClient
            .from('respuestas')
            .insert([
                {
                    nombre: data.nombre,
                    telefono: data.telefono,
                    email: data.email,
                    resultados: JSON.stringify(data.scores),
                    fecha: new Date()
                }
            ]);
            
        if (error) {
            throw error;
        }
        
        return true;
    } catch (error) {
        console.error('Error saving to Supabase:', error);
        return false;
    }
}