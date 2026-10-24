import type { IconName } from "@/components/ui/Icon";

export interface Service {
  slug: string;
  nama: string;
  ikon: IconName;
  ringkas: string;
  deskripsi: string;
  fitur: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "managed-it",
    nama: "Managed IT Services",
    ikon: "server",
    ringkas: "Pengelolaan infrastruktur IT harian agar bisnis Anda fokus pada pekerjaan utama.",
    deskripsi:
      "Tim kami bertindak sebagai departemen IT Anda: memantau perangkat, mengelola pengguna, dan menangani kendala teknis sebelum mengganggu operasional.",
    fitur: ["Helpdesk dengan SLA jelas", "Manajemen perangkat dan akun pengguna", "Pembaruan dan patching berkala", "Laporan bulanan"],
  },
  {
    slug: "cloud-solutions",
    nama: "Cloud Solutions",
    ikon: "cloud",
    ringkas: "Migrasi dan pengelolaan sistem ke cloud yang aman, efisien, dan hemat biaya.",
    deskripsi:
      "Kami membantu merancang arsitektur cloud, memindahkan aplikasi dan data dengan risiko minimal, lalu mengoptimalkan biayanya.",
    fitur: ["Asesmen dan perencanaan migrasi", "Backup dan disaster recovery", "Optimasi biaya cloud", "Pengelolaan lingkungan hybrid"],
  },
  {
    slug: "cybersecurity",
    nama: "Cybersecurity",
    ikon: "shield",
    ringkas: "Lindungi data dan sistem perusahaan dari ancaman siber.",
    deskripsi:
      "Dari penilaian kerentanan hingga pelatihan karyawan, kami membangun lapisan keamanan yang sesuai dengan skala bisnis Anda.",
    fitur: ["Vulnerability assessment", "Firewall dan endpoint protection", "Pelatihan kesadaran keamanan", "Respons insiden"],
  },
  {
    slug: "it-consulting",
    nama: "IT Consulting",
    ikon: "lightbulb",
    ringkas: "Konsultasi strategi teknologi agar investasi IT tepat sasaran.",
    deskripsi:
      "Kami membantu menyusun roadmap teknologi, memilih solusi yang tepat, dan memastikan setiap rupiah investasi IT memberi dampak nyata.",
    fitur: ["Audit infrastruktur IT", "Roadmap transformasi digital", "Pemilihan vendor dan produk", "Pendampingan implementasi"],
  },
  {
    slug: "system-integration",
    nama: "System Integration",
    ikon: "link",
    ringkas: "Menghubungkan aplikasi dan perangkat agar data mengalir tanpa hambatan.",
    deskripsi:
      "Kami mengintegrasikan sistem yang berdiri sendiri-sendiri, seperti ERP, CRM, dan aplikasi internal, menjadi satu alur kerja yang rapi.",
    fitur: ["Integrasi API dan database", "Otomasi alur kerja", "Migrasi data", "Dokumentasi teknis lengkap"],
  },
  {
    slug: "performance-monitoring",
    nama: "Performance Monitoring",
    ikon: "chart",
    ringkas: "Pantau kesehatan sistem 24/7 dan cegah gangguan sebelum terjadi.",
    deskripsi:
      "Dashboard dan peringatan otomatis membantu tim mendeteksi masalah lebih awal, sehingga downtime dapat ditekan seminimal mungkin.",
    fitur: ["Monitoring server dan jaringan", "Alert otomatis", "Dashboard real-time", "Analisis tren performa"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
