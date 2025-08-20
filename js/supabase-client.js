// Configuración de Supabase - Reemplaza con tus valores
const SUPABASE_URL = 'https://clefjmvyfbugkaspmcws.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZWZqbXZ5ZmJ1Z2thc3BtY3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MTcxMzgsImV4cCI6MjA3MTI5MzEzOH0.D5ndBsoSy3rWhqHY-6dIuPpAsLl7lJFOCphiflilKys';

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