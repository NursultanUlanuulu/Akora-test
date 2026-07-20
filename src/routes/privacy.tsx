export function PrivacyPage() {
  return (
    <main className="min-h-screen bg-mist py-12 md:py-20">
      <article className="container-x max-w-3xl rounded-3xl bg-white p-7 text-ink shadow-sm md:p-12">
        <a href="/" className="text-sm text-navy underline decoration-gold underline-offset-4">
          ← Вернуться на главную
        </a>
        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-gold">AKORA Education</p>
        <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-sm text-ink/60">Последнее обновление: 20 июля 2026 года</p>

        <div className="mt-10 space-y-8 leading-relaxed text-ink/75">
          <section>
            <h2 className="font-display text-2xl text-navy">1. Кто обрабатывает данные</h2>
            <p className="mt-3">
              AKORA Education LLC обрабатывает персональные данные посетителей сайта для
              консультаций по образовательным услугам. Связаться с нами можно по адресу
              acoraeducation@gmail.com или по телефону +996 550 878 512.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-navy">2. Какие данные мы получаем</h2>
            <p className="mt-3">
              При заполнении формы вы самостоятельно указываете имя, номер телефона, email,
              интересующую услугу и текст сообщения. Мы не запрашиваем специальные категории
              персональных данных.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-navy">3. Для чего используются данные</h2>
            <p className="mt-3">
              Данные используются только для ответа на ваш запрос, записи на консультацию и
              предоставления информации об услугах AKORA Education. Мы не продаём и не передаём
              данные третьим лицам для их собственных маркетинговых целей.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-navy">4. Передача через WhatsApp</h2>
            <p className="mt-3">
              После нажатия кнопки формы сайт открывает WhatsApp с подготовленным сообщением.
              Сообщение отправляется только после вашего подтверждения в WhatsApp. Обработка данных
              в WhatsApp также регулируется политикой конфиденциальности этого сервиса.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-navy">5. Хранение и защита</h2>
            <p className="mt-3">
              Мы храним данные только столько, сколько необходимо для ответа на обращение и
              дальнейшего взаимодействия по вашему запросу, и принимаем разумные меры для
              ограничения доступа к ним.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-navy">6. Ваши права</h2>
            <p className="mt-3">
              Вы можете запросить сведения о своих данных, их исправление или удаление, написав на
              acoraeducation@gmail.com. Также вы можете отозвать согласие на обработку данных в
              любой момент.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-navy">7. Изменения политики</h2>
            <p className="mt-3">
              Мы можем обновлять эту политику при изменении работы сайта или требований к обработке
              данных. Актуальная версия всегда опубликована на этой странице.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
