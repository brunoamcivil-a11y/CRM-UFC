import React from 'react';
import { 
  LayoutDashboard, 
  HardHat, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3,
  Construction
} from 'lucide-react';

// Mock de dados (Simulando o que viria do seu banco de dados no Supabase)
const demandas = [
  { id: 1, profissional: "Eng. Ricardo", obra: "Residencial Horizonte", disciplina: "Estrutural", status: "Cálculo", complexidade: "Alta", progresso: 65 },
  { id: 2, profissional: "Eng. Sarah", obra: "Shopping Center Norte", disciplina: "Elétrica", status: "Revisão Técnica", complexidade: "Média", progresso: 90 },
  { id: 3, profissional: "Téc. Marcos", obra: "Ponte Rio Branco", disciplina: "Fundações", status: "Briefing", complexidade: "Altíssima", progresso: 10 },
];

export default function CRM_Engenharia() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-10">
          <Construction className="text-yellow-400" />
          <span className="font-bold text-xl tracking-tight">ENG_Manage</span>
        </div>
        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-yellow-400 font-medium cursor-pointer">
            <LayoutDashboard size={20} /> Dashboard
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition">
            <HardHat size={20} /> Engenheiros
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition">
            <BarChart3 size={20} /> Relatórios de Carga
          </div>
        </nav>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Controle de Demandas Técnicas</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            + Nova Demanda
          </button>
        </header>

        {/* Cards de KPI Rápido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-sm font-medium">Ocupação Média</span>
              <Clock size={18} />
            </div>
            <div className="text-2xl font-bold text-gray-800">84%</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-sm font-medium">Aguardando Revisão</span>
              <AlertTriangle size={18} />
            </div>
            <div className="text-2xl font-bold text-gray-800">12 tarefas</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-sm font-medium">Entregues (Mês)</span>
              <CheckCircle2 size={18} />
            </div>
            <div className="text-2xl font-bold text-gray-800">45</div>
          </div>
        </div>

        {/* Tabela de Demandas */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-bottom border-gray-100 text-gray-600">
              <tr>
                <th className="p-4 font-semibold text-sm">Profissional</th>
                <th className="p-4 font-semibold text-sm">Obra / Disciplina</th>
                <th className="p-4 font-semibold text-sm">Complexidade</th>
                <th className="p-4 font-semibold text-sm">Status</th>
                <th className="p-4 font-semibold text-sm text-center">Progresso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {demandas.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/50 transition">
                  <td className="p-4 font-medium text-gray-700">{item.profissional}</td>
                  <td className="p-4">
                    <div className="text-sm font-bold text-gray-800">{item.obra}</div>
                    <div className="text-xs text-gray-500">{item.disciplina}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold 
                      ${item.complexidade === 'Alta' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                      {item.complexidade}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 font-medium">
                    {item.status}
                  </td>
                  <td className="p-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.progresso}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
